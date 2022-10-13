import { useEffect, useState } from 'react'
import { Article, getGlobalFeed } from '../api/article-api'
import { ArticlePreview } from '../components/ArticlePreview'
import { TagList } from '../components/TagList'
import { useAuthContext } from '../utils/context'

export const IndexPage = () => {
  const { isLoggedIn } = useAuthContext()
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const { data, status } = await getGlobalFeed()
      if (status === 200) {
        setArticles(data.articles)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <div className="home-page">
        <div className="banner">
          <div className="container">
            <h1 className="logo-font">conduit</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>

        <div className="container page">
          <div className="row">
            <div className="col-md-9">
              <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                  <li className="nav-item">
                    {isLoggedIn && (
                      <a className="nav-link disabled" href="">
                        Your Feed
                      </a>
                    )}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" href="">
                      Global Feed
                    </a>
                  </li>
                </ul>
              </div>

              {articles.map((article, index) => (
                <ArticlePreview article={article} key={index} />
              ))}
            </div>

            <div className="col-md-3">
              <div className="sidebar">
                <p>Popular Tags</p>
                <TagList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
