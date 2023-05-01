const API_URL = 'https://'+process.env.dm+'/graphql';

const numposthome = 30

async function fetchAPI(query, { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' }

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API'+query)
  }
  return json.data
}




export async function getPreviewPost(id, idType = 'DATABASE_ID') {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  )
  return data.post
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  return data?.posts
}

export async function getAllPostsWithUri() {
  const data = await fetchAPI(`
    {
      posts(first: 10000) {
        edges {
          node {
            uri
          }
        }
      }
    }
  `)
  return data?.posts
}





export async function getposthome(page =1) {
  const data = await fetchAPI(
    `query gethome {
  posts(first: 30) {
    edges {
      node {
        title
        excerpt
        slug
        uri
        date
        featuredImage {
          node {
            sourceUrl
            mediaDetails {
              sizes {
                sourceUrl
                name
              }
            }
          }
        }
        categories {
          nodes {
            name
            slug
            uri
          }
        }
        
      }
    }
  }
}`)

  return data?.posts
}

export async function getpostcat(slug,page =1) {

  const pageofset = numposthome*page-numposthome*1


  const data = await fetchAPI(
    `
    query AllPosts {
  posts(
    where: {categoryName: "${slug}",orderby: {field: DATE, order: DESC}, offsetPagination: {offset: ${pageofset}, size: ${numposthome}}}
  ) {
    edges {
      node {
        title
        excerpt
        slug
        uri
        date
        featuredImage {
          node {
            sourceUrl
            mediaDetails {
              sizes {
                sourceUrl
                name
              }
            }
          }
        }
        categories {
          nodes {
            name
            slug
            uri
          }
        }
        author {
          node {
            name
            firstName
            lastName
            avatar {
              url
            }
          }
        }
      }
    }
    pageInfo {
      offsetPagination {
        hasMore
        hasPrevious
        total
      }
    }
  }


  category(id: "${slug}", idType: SLUG) {
    seo {
      canonical
      breadcrumbs {
        text
        url
      }
      fullHead
      metaDesc
      metaKeywords
      metaRobotsNofollow
      metaRobotsNoindex
      opengraphDescription
      title
      schema {
        raw
      }
    }
  }
}
  `    
  )

  return data
}


export async function getalluriforseo() {



  const data = await fetchAPI(
    `
  query AllPosts {
  categories(first: 100) {
    nodes {
      slug
    }
  }
  
  posts(first: 1000) {
    nodes {
      slug
    }
  }
}
  `    
  )

  let listuri = []
  {data.categories.nodes.map((item,index) => (listuri.push('/category/'+item.slug) ))}
  {data.posts.nodes.map((item,index) => (listuri.push('/'+item.slug) ))}


  return listuri
  
}

export async function getCateogryRecentPostbyName(typeName, categoryName) {

  const data = await fetchAPI(
    `
    query CategoryPostbyName($categoryName: String! ="") {
  posts(where: {${typeName}: $categoryName }, first: 21) {
    pageInfo {
      
      hasNextPage
      endCursor
      hasPreviousPage
      startCursor
    }
    edges {
      node {
        title
        excerpt
        slug
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            name
            uri
          }
        }
        date
        uri
      }
    }
  }
}
`, {
    variables: {
      categoryName: categoryName
    }
  }
  )
  return data?.posts
}

export async function getPostDetailsByUri(slug) {
  const data = await fetchAPI(`query getpost {
  postBy(uri: "${slug}") {
    postId
    fixgrap
    title(format: RENDERED)
    excerpt(format: RENDERED)
    date
    content(format: RENDERED)
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
}`)



  return data
}


export async function getPageDetailsByUri(uri) {
  const data = await fetchAPI(`
    fragment PageFields on Page {
      title
      slug
      date
      content
      featuredImage {
        node {
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
      }
      
    }

    query PageDetailsByUri($id: ID = "") {
      page(id: $id, idType: URI){
        ...PageFields
      }
    }

  `, {
    variables: {
      id: uri
    }
  })
  return data?.page
}

/*query GetHeaderMenuByName($id: ID = "") {
  menu(id: $id, idType: NAME) {
    menuItems {
      edges {
        node {
          path
          label
        }
      }
    }
  }
}
*/
export async function getHeaderMenuByName(menu_name) {
  const data = MENU_TOP
  return data.data

}
