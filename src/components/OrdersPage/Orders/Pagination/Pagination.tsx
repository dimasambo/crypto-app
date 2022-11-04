import {FC, useEffect, useState} from "react";
import s from "./Pagination.module.scss"
import Prev from '../../../../media/Prev.png'
import Next from '../../../../media/Next.png'

type PropsType = {
    ordersCount: number
    currentPage: number
    setCurrentPage: (currentPage: number) => void
    limit: number
}

export const Pagination: FC<PropsType> = ({ordersCount, currentPage, setCurrentPage, limit}) => {
    const [totalPages, setTotalPages] = useState(Math.ceil(ordersCount/limit))
    const [pages, setPages] = useState<Array<number>>([])

    useEffect(() => {
        setPages([])
        for(let i = 0; i < Math.ceil(ordersCount/limit); i++) {
            setPages(oldArr => [...oldArr, i + 1])
        }
    }, [])

    return <div className={s.paginationWrapper}>
        <div className={s.paginationNavPrev + ' ' + s.paginationNav}>
            <img src={Prev} />
        </div>
        <div className={s.paginationContent}>
            {pages.map(page =>
                <div className={currentPage === page ? s.paginationItem + ' ' + s.activeItem : s.paginationItem}>
                    {page}
                </div>
            )}
        </div>
        <div className={s.paginationNavNext + ' ' + s.paginationNav}>
            <img src={Next} />
        </div>
    </div>
}