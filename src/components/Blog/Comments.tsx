import React from 'react'

type Props = {
    name: string
    date?: string
    comment: string
    photo: string
}

const Comments: React.FC<Props> = ({ name, comment, photo }) => {
    return (
        <>
            <div className=" mx-auto border px-6 py-4 rounded-lg w-[1665px] mb-[62px]" >
                <div className="flex items-center mb-6">
                    <img
                        src={photo}
                        alt="Avatar"
                        className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                        <div className="text-lg font-medium text-gray-800">{name}</div>
                        <div className="text-gray-500">2 hours ago</div>
                    </div>
                </div>
                <p className="text-lg leading-relaxed mb-6">
                    {comment}
                </p>
                <div className="flex justify-between items-center">
                    <div>
                        <a href="#" className="text-gray-500 hover:text-gray-700 mr-4">
                            <i className="far fa-thumbs-up"></i> Like
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-700">
                            <i className="far fa-comment-alt"></i> Reply
                        </a>
                    </div>
                    <div className="flex items-center">
                        <a href="#" className="text-gray-500 hover:text-gray-700 mr-4">
                            <i className="far fa-flag"></i> Report
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-700">
                            <i className="far fa-share-square"></i> Share
                        </a>
                    </div>
                </div>
            </div></>
    )
}

export default Comments