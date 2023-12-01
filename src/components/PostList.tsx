import { useState } from 'react'
import { Link } from 'react-router-dom'

interface PostListProps {
  hasNavigation?: boolean
}

type TabType = 'all' | 'my'

export const PostList = ({ hasNavigation = true }: PostListProps) => {
  const [activeTab, setActiveTab] = useState<TabType>('all')

  return (
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div
            role="presentation"
            className={activeTab === 'all' ? 'post__navigation--active' : ''}
            onClick={() => setActiveTab('all')}
          >
            전체
          </div>
          <div
            role="presentation"
            className={activeTab === 'my' ? 'post__navigation--active' : ''}
            onClick={() => setActiveTab('my')}
          >
            나의 글
          </div>
        </div>
      )}
      <div className="post__list">
        {Array.from({ length: 10 }).map((e, index) => (
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile" />
                <div className="post__author-name">패스트캠퍼스</div>
                <div className="post__date">2023.07.08 토요일</div>
              </div>
              <div className="post__title">게시글 {index}</div>
              <div className="post__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
                ducimus a quaerat commodi dolorum? Quasi libero dolores a
                incidunt dolor. Fugiat sunt veniam accusamus vitae, perspiciatis
                culpa inventore asperiores quaerat.
              </div>
              <div className="post__utils-box">
                <div className="post__delete">삭제</div>
                <div className="post__edit">수정</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
