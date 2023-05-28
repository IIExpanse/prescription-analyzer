import React from 'react'
import { Link } from 'react-router-dom'
import "./Menu.css"

const Menu = () => {
    return (
        <div className="Menu">
            <div className='Menu one'>
                <Link to="/" className='link'>
                    <div className='Menu_2'>
                        <svg width="37" height="34" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M37 0V3L11 3V0L37 0ZM3.1 2.6L12.55 12.05L3.15 21.45L1 19.3L8.25 12.05L0.950001 4.75L3.1 2.6ZM37 10.6V13.6L17 13.6V10.6L37 10.6ZM37 21V24L11 24V21L37 21Z" fill="#2F9FD8" />
                        </svg>
                        <p className='Menu_3 one'>Главная</p>
                    </div>
                </Link>
                <Link to="/calendar" className='link'>
                    <div className='Menu_2'>
                        <svg className='s2' width="46" height="34" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 40C2.2 40 1.5 39.7 0.9 39.1C0.3 38.5 0 37.8 0 37V6C0 5.2 0.3 4.5 0.9 3.9C1.5 3.3 2.2 3 3 3H6.25V0H9.5V3H26.5V0H29.75V3H33C33.8 3 34.5 3.3 35.1 3.9C35.7 4.5 36 5.2 36 6V37C36 37.8 35.7 38.5 35.1 39.1C34.5 39.7 33.8 40 33 40H3ZM3 37H33V15.5H3V37ZM3 12.5H33V6H3V12.5ZM8 23V20H28V23H8ZM8 32V29H21.95V32H8Z" fill="#2F9FD8" />
                        </svg>
                        <p className='Menu_3'>Календарь</p>
                    </div>
                </Link>
                <Link to="/workers" className='link'>
                    <div className='Menu_2  three'>
                        <svg className='s1' width="46" height="34" viewBox="0 0 46 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.900024 32V27.3C0.900024 26.1333 1.20002 25.075 1.80002 24.125C2.40002 23.175 3.23336 22.4667 4.30002 22C6.73336 20.9333 8.92502 20.1667 10.875 19.7C12.825 19.2333 14.8334 19 16.9 19C18.9667 19 20.9667 19.2333 22.9 19.7C24.8334 20.1667 27.0167 20.9333 29.45 22C30.5167 22.4667 31.3584 23.175 31.975 24.125C32.5917 25.075 32.9 26.1333 32.9 27.3V32H0.900024ZM35.9 32V27.3C35.9 25.2 35.3667 23.475 34.3 22.125C33.2334 20.775 31.8334 19.6833 30.1 18.85C32.4 19.1167 34.5667 19.5083 36.6 20.025C38.6334 20.5417 40.2834 21.1333 41.55 21.8C42.65 22.4333 43.5167 23.2167 44.15 24.15C44.7834 25.0833 45.1 26.1333 45.1 27.3V32H35.9ZM16.9 15.95C14.7 15.95 12.9 15.25 11.5 13.85C10.1 12.45 9.40002 10.65 9.40002 8.45001C9.40002 6.25001 10.1 4.45001 11.5 3.05001C12.9 1.65001 14.7 0.950012 16.9 0.950012C19.1 0.950012 20.9 1.65001 22.3 3.05001C23.7 4.45001 24.4 6.25001 24.4 8.45001C24.4 10.65 23.7 12.45 22.3 13.85C20.9 15.25 19.1 15.95 16.9 15.95ZM34.9 8.45001C34.9 10.65 34.2 12.45 32.8 13.85C31.4 15.25 29.6 15.95 27.4 15.95C27.0334 15.95 26.625 15.925 26.175 15.875C25.725 15.825 25.3167 15.7333 24.95 15.6C25.75 14.7667 26.3584 13.7417 26.775 12.525C27.1917 11.3083 27.4 9.95001 27.4 8.45001C27.4 6.95001 27.1917 5.62501 26.775 4.47501C26.3584 3.32501 25.75 2.26668 24.95 1.30001C25.3167 1.20001 25.725 1.11668 26.175 1.05001C26.625 0.983346 27.0334 0.950012 27.4 0.950012C29.6 0.950012 31.4 1.65001 32.8 3.05001C34.2 4.45001 34.9 6.25001 34.9 8.45001ZM3.90002 29H29.9V27.3C29.9 26.7667 29.7417 26.25 29.425 25.75C29.1084 25.25 28.7167 24.9 28.25 24.7C25.85 23.6333 23.8334 22.9167 22.2 22.55C20.5667 22.1833 18.8 22 16.9 22C15 22 13.225 22.1833 11.575 22.55C9.92502 22.9167 7.90002 23.6333 5.50002 24.7C5.03336 24.9 4.65002 25.25 4.35002 25.75C4.05002 26.25 3.90002 26.7667 3.90002 27.3V29ZM16.9 12.95C18.2 12.95 19.275 12.525 20.125 11.675C20.975 10.825 21.4 9.75001 21.4 8.45001C21.4 7.15001 20.975 6.07501 20.125 5.22501C19.275 4.37501 18.2 3.95001 16.9 3.95001C15.6 3.95001 14.525 4.37501 13.675 5.22501C12.825 6.07501 12.4 7.15001 12.4 8.45001C12.4 9.75001 12.825 10.825 13.675 11.675C14.525 12.525 15.6 12.95 16.9 12.95Z" fill="#2F9FD8" />
                        </svg>
                        <p className='Menu_3'>Сотрудники</p>
                    </div>
                </Link>
                <Link to="/patients" className='link'>
                    <div className='Menu_2'>
                        <svg width="46" height="34" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26 19.85C24.3 19.85 22.8917 19.2917 21.775 18.175C20.6583 17.0583 20.1 15.65 20.1 13.95C20.1 12.25 20.6583 10.8417 21.775 9.725C22.8917 8.60833 24.3 8.05 26 8.05C27.7 8.05 29.1083 8.60833 30.225 9.725C31.3417 10.8417 31.9 12.25 31.9 13.95C31.9 15.65 31.3417 17.0583 30.225 18.175C29.1083 19.2917 27.7 19.85 26 19.85ZM14 32V28.7C14 28.0712 14.15 27.4723 14.45 26.9034C14.75 26.3345 15.15 25.9333 15.65 25.7C17.15 24.6333 18.7917 23.8417 20.575 23.325C22.3583 22.8083 24.1667 22.55 26 22.55C27.8333 22.55 29.6333 22.8333 31.4 23.4C33.1667 23.9667 34.8167 24.7333 36.35 25.7C36.8167 26.0333 37.2083 26.4583 37.525 26.975C37.8417 27.4917 38 28.0667 38 28.7V32H14ZM16.75 28.45V29H35.25V28.45C33.95 27.5833 32.45 26.8833 30.75 26.35C29.05 25.8167 27.4667 25.55 26 25.55C24.5333 25.55 22.9417 25.8167 21.225 26.35C19.5083 26.8833 18.0167 27.5833 16.75 28.45ZM26 16.85C26.8667 16.85 27.5667 16.5833 28.1 16.05C28.6333 15.5167 28.9 14.8167 28.9 13.95C28.9 13.0833 28.6333 12.3833 28.1 11.85C27.5667 11.3167 26.8667 11.05 26 11.05C25.1333 11.05 24.4333 11.3167 23.9 11.85C23.3667 12.3833 23.1 13.0833 23.1 13.95C23.1 14.8167 23.3667 15.5167 23.9 16.05C24.4333 16.5833 25.1333 16.85 26 16.85ZM0 19.5V16.5H15.3V19.5H0ZM0 3V0H23.65V3H0ZM17.45 11.25H0V8.25H19C18.6333 8.68333 18.3212 9.14868 18.0637 9.64605C17.8061 10.1434 17.6015 10.678 17.45 11.25Z" fill="#2F9FD8" />
                        </svg>
                        <p className='Menu_3'>Пациенты</p>
                    </div>
                </Link>
                <Link to="/finance" className='link'>
                    <div className='Menu_2'>
                        <svg width="46" height="34" viewBox="0 0 39 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.6 21.2C27.4333 21.2 28.175 20.875 28.825 20.225C29.475 19.575 29.8 18.825 29.8 17.975C29.8 17.125 29.475 16.3833 28.825 15.75C28.175 15.1167 27.4333 14.8 26.6 14.8C25.7667 14.8 25.025 15.1167 24.375 15.75C23.725 16.3833 23.4 17.125 23.4 17.975C23.4 18.825 23.725 19.575 24.375 20.225C25.025 20.875 25.7667 21.2 26.6 21.2ZM3 30.35V33V3V30.35ZM3 36C2.23333 36 1.54167 35.7 0.925 35.1C0.308333 34.5 0 33.8 0 33V3C0 2.23333 0.308333 1.54167 0.925 0.925C1.54167 0.308333 2.23333 0 3 0H33C33.8 0 34.5 0.308333 35.1 0.925C35.7 1.54167 36 2.23333 36 3V9.7H33V3H3V33H33V26.35H36V33C36 33.8 35.7 34.5 35.1 35.1C34.5 35.7 33.8 36 33 36H3ZM20.9 27.35C19.7667 27.35 18.8667 27.0167 18.2 26.35C17.5333 25.6833 17.2 24.8 17.2 23.7V12.35C17.2 11.2167 17.5333 10.325 18.2 9.675C18.8667 9.025 19.7667 8.7 20.9 8.7H34.4C35.5333 8.7 36.4333 9.025 37.1 9.675C37.7667 10.325 38.1 11.2167 38.1 12.35V23.7C38.1 24.8 37.7667 25.6833 37.1 26.35C36.4333 27.0167 35.5333 27.35 34.4 27.35H20.9ZM35.1 24.35V11.7H20.2V24.35H35.1Z" fill="#2F9FD8" />
                        </svg>
                        <p className='Menu_3 '>Финансы</p>
                    </div>
                </Link>
                <Link to="/documents" className='link'>
                    <div className='Menu_2'>
                        <svg width="36" height="34" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.95 31.5H24.05V28.5H7.95V31.5ZM7.95 23H24.05V20H7.95V23ZM3 40C2.2 40 1.5 39.7 0.9 39.1C0.3 38.5 0 37.8 0 37V3C0 2.2 0.3 1.5 0.9 0.9C1.5 0.3 2.2 0 3 0H21.05L32 10.95V37C32 37.8 31.7 38.5 31.1 39.1C30.5 39.7 29.8 40 29 40H3ZM19.55 12.3V3H3V37H29V12.3H19.55Z" fill="#2F9FD8" />
                        </svg>
                        <p className='Menu_3'>Документы</p>
                    </div>
                </Link>
                <Link to="/support" className='link'>
                    <div className='Menu_2 two'>
                        <svg width="46" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 40C17.2333 40 14.6333 39.475 12.2 38.425C9.76667 37.375 7.65 35.95 5.85 34.15C4.05 32.35 2.625 30.2333 1.575 27.8C0.525 25.3667 0 22.7667 0 20C0 17.2333 0.525 14.6333 1.575 12.2C2.625 9.76667 4.05 7.65 5.85 5.85C7.65 4.05 9.76667 2.625 12.2 1.575C14.6333 0.525 17.2333 -2.38419e-07 20 -2.38419e-07C22.7667 -2.38419e-07 25.3667 0.525 27.8 1.575C30.2333 2.625 32.35 4.05 34.15 5.85C35.95 7.65 37.375 9.76667 38.425 12.2C39.475 14.6333 40 17.2333 40 20C40 22.7667 39.475 25.3667 38.425 27.8C37.375 30.2333 35.95 32.35 34.15 34.15C32.35 35.95 30.2333 37.375 27.8 38.425C25.3667 39.475 22.7667 40 20 40ZM13.95 36L17.1 28.5C15.8333 28.0667 14.7083 27.375 13.725 26.425C12.7417 25.475 12 24.3167 11.5 22.95L4 25.95C5.03333 28.3167 6.4 30.3667 8.1 32.1C9.8 33.8333 11.75 35.1333 13.95 36ZM11.45 17.1C11.9833 15.7333 12.7333 14.5667 13.7 13.6C14.6667 12.6333 15.7833 11.9333 17.05 11.5L14.05 4C11.55 5.03333 9.43333 6.425 7.7 8.175C5.96667 9.925 4.73333 11.9 4 14.1L11.45 17.1ZM20 26C21.6667 26 23.0833 25.4167 24.25 24.25C25.4167 23.0833 26 21.6667 26 20C26 18.3333 25.4167 16.9167 24.25 15.75C23.0833 14.5833 21.6667 14 20 14C18.3333 14 16.9167 14.5833 15.75 15.75C14.5833 16.9167 14 18.3333 14 20C14 21.6667 14.5833 23.0833 15.75 24.25C16.9167 25.4167 18.3333 26 20 26ZM26.05 36C28.35 35.0667 30.35 33.7417 32.05 32.025C33.75 30.3083 35.0667 28.3167 36 26.05L28.5 22.95C28 24.35 27.2583 25.525 26.275 26.475C25.2917 27.425 24.1667 28.1 22.9 28.5L26.05 36ZM28.5 17.05L36 13.95C35.0667 11.6833 33.7417 9.69167 32.025 7.975C30.3083 6.25833 28.3167 4.93333 26.05 4L23 11.5C24.2667 11.9333 25.3667 12.625 26.3 13.575C27.2333 14.525 27.9667 15.6833 28.5 17.05Z" fill="#2F9FD8" />
                        </svg>
                        <p className='Menu_3' >Тех. поддержка</p>
                    </div>
                </Link>
                <Link to="/profile" className='link'>
                    <div className='Menu_2'>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.1 31.25C9.2 29.7833 11.2833 28.6583 13.35 27.875C15.4167 27.0917 17.6333 26.7 20 26.7C22.3667 26.7 24.5917 27.0917 26.675 27.875C28.7583 28.6583 30.85 29.7833 32.95 31.25C34.4167 29.45 35.4583 27.6333 36.075 25.8C36.6917 23.9667 37 22.0333 37 20C37 15.1667 35.375 11.125 32.125 7.875C28.875 4.625 24.8333 3 20 3C15.1667 3 11.125 4.625 7.875 7.875C4.625 11.125 3 15.1667 3 20C3 22.0333 3.31667 23.9667 3.95 25.8C4.58333 27.6333 5.63333 29.45 7.1 31.25ZM19.9907 21.5C18.0636 21.5 16.4417 20.8386 15.125 19.5157C13.8083 18.1928 13.15 16.5678 13.15 14.6407C13.15 12.7136 13.8114 11.0917 15.1343 9.775C16.4572 8.45833 18.0822 7.8 20.0093 7.8C21.9364 7.8 23.5583 8.46143 24.875 9.7843C26.1917 11.1072 26.85 12.7322 26.85 14.6593C26.85 16.5864 26.1886 18.2083 24.8657 19.525C23.5428 20.8417 21.9178 21.5 19.9907 21.5ZM20.0234 40C17.2745 40 14.6833 39.475 12.25 38.425C9.81667 37.375 7.69167 35.9417 5.875 34.125C4.05833 32.3083 2.625 30.1872 1.575 27.7617C0.525 25.3362 0 22.7445 0 19.9867C0 17.2289 0.525 14.6417 1.575 12.225C2.625 9.80833 4.05833 7.69167 5.875 5.875C7.69167 4.05833 9.81277 2.625 12.2383 1.575C14.6638 0.525 17.2555 0 20.0133 0C22.7711 0 25.3583 0.525 27.775 1.575C30.1917 2.625 32.3083 4.05833 34.125 5.875C35.9417 7.69167 37.375 9.80887 38.425 12.2266C39.475 14.6443 40 17.2277 40 19.9766C40 22.7255 39.475 25.3167 38.425 27.75C37.375 30.1833 35.9417 32.3083 34.125 34.125C32.3083 35.9417 30.1911 37.375 27.7734 38.425C25.3557 39.475 22.7723 40 20.0234 40ZM20 37C21.8333 37 23.625 36.7333 25.375 36.2C27.125 35.6667 28.85 34.7333 30.55 33.4C28.85 32.2 27.1167 31.2833 25.35 30.65C23.5833 30.0167 21.8 29.7 20 29.7C18.2 29.7 16.4167 30.0167 14.65 30.65C12.8833 31.2833 11.15 32.2 9.45 33.4C11.15 34.7333 12.875 35.6667 14.625 36.2C16.375 36.7333 18.1667 37 20 37ZM20 18.5C21.1333 18.5 22.0583 18.1417 22.775 17.425C23.4917 16.7083 23.85 15.7833 23.85 14.65C23.85 13.5167 23.4917 12.5917 22.775 11.875C22.0583 11.1583 21.1333 10.8 20 10.8C18.8667 10.8 17.9417 11.1583 17.225 11.875C16.5083 12.5917 16.15 13.5167 16.15 14.65C16.15 15.7833 16.5083 16.7083 17.225 17.425C17.9417 18.1417 18.8667 18.5 20 18.5Z" fill="#2F9FD8" />
                        </svg>
                        <p className='Menu_3'>Профиль</p>
                    </div>
                </Link>
            </div >
            <div className="Menu two">
                <Link to="/settings" className='link'>
                    <div className="Menu_2">
                        <svg width="36" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.4 40L14.4 33.7C13.7667 33.4667 13.1 33.15 12.4 32.75C11.7 32.35 11.0833 31.9333 10.55 31.5L4.65 34.2L0 26L5.4 22.05C5.33333 21.75 5.29167 21.4083 5.275 21.025C5.25833 20.6417 5.25 20.3 5.25 20C5.25 19.7 5.25833 19.3583 5.275 18.975C5.29167 18.5917 5.33333 18.25 5.4 17.95L0 14L4.65 5.8L10.55 8.5C11.0833 8.06667 11.7 7.65 12.4 7.25C13.1 6.85 13.7667 6.55 14.4 6.35L15.4 0H24.6L25.6 6.3C26.2333 6.53333 26.9083 6.84167 27.625 7.225C28.3417 7.60833 28.95 8.03333 29.45 8.5L35.35 5.8L40 14L34.6 17.85C34.6667 18.1833 34.7083 18.5417 34.725 18.925C34.7417 19.3083 34.75 19.6667 34.75 20C34.75 20.3333 34.7417 20.6833 34.725 21.05C34.7083 21.4167 34.6667 21.7667 34.6 22.1L40 26L35.35 34.2L29.45 31.5C28.9167 31.9333 28.3083 32.3583 27.625 32.775C26.9417 33.1917 26.2667 33.5 25.6 33.7L24.6 40H15.4ZM20 26.5C21.8 26.5 23.3333 25.8667 24.6 24.6C25.8667 23.3333 26.5 21.8 26.5 20C26.5 18.2 25.8667 16.6667 24.6 15.4C23.3333 14.1333 21.8 13.5 20 13.5C18.2 13.5 16.6667 14.1333 15.4 15.4C14.1333 16.6667 13.5 18.2 13.5 20C13.5 21.8 14.1333 23.3333 15.4 24.6C16.6667 25.8667 18.2 26.5 20 26.5ZM20 23.5C19.0333 23.5 18.2083 23.1583 17.525 22.475C16.8417 21.7917 16.5 20.9667 16.5 20C16.5 19.0333 16.8417 18.2083 17.525 17.525C18.2083 16.8417 19.0333 16.5 20 16.5C20.9667 16.5 21.7917 16.8417 22.475 17.525C23.1583 18.2083 23.5 19.0333 23.5 20C23.5 20.9667 23.1583 21.7917 22.475 22.475C21.7917 23.1583 20.9667 23.5 20 23.5ZM17.8 37H22.2L22.9 31.4C24 31.1333 25.0417 30.7167 26.025 30.15C27.0083 29.5833 27.9 28.9 28.7 28.1L34 30.4L36 26.8L31.3 23.35C31.4333 22.7833 31.5417 22.225 31.625 21.675C31.7083 21.125 31.75 20.5667 31.75 20C31.75 19.4333 31.7167 18.875 31.65 18.325C31.5833 17.775 31.4667 17.2167 31.3 16.65L36 13.2L34 9.6L28.7 11.9C27.9333 11.0333 27.0667 10.3083 26.1 9.725C25.1333 9.14167 24.0667 8.76667 22.9 8.6L22.2 3H17.8L17.1 8.6C15.9667 8.83333 14.9083 9.23333 13.925 9.8C12.9417 10.3667 12.0667 11.0667 11.3 11.9L6 9.6L4 13.2L8.7 16.65C8.56667 17.2167 8.45833 17.775 8.375 18.325C8.29167 18.875 8.25 19.4333 8.25 20C8.25 20.5667 8.29167 21.125 8.375 21.675C8.45833 22.225 8.56667 22.7833 8.7 23.35L4 26.8L6 30.4L11.3 28.1C12.1 28.9 12.9917 29.5833 13.975 30.15C14.9583 30.7167 16 31.1333 17.1 31.4L17.8 37Z" fill="#2F9FD8" />
                        </svg>
                        <p className='Menu_3'>Настройки</p>
                    </div>
                </Link>
                <Link to="/exit" className='link'>
                    <div className="Menu_2 last">
                        <svg width="31" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 36C2.2 36 1.5 35.7 0.9 35.1C0.3 34.5 0 33.8 0 33V3C0 2.2 0.3 1.5 0.9 0.9C1.5 0.3 2.2 0 3 0H17.55V3H3V33H17.55V36H3ZM27.3 26.75L25.15 24.6L30.25 19.5H12.75V16.5H30.15L25.05 11.4L27.2 9.25L36 18.05L27.3 26.75Z" fill="#2F9FD8" />
                        </svg>
                        <p className='Menu_3'>Выйти</p>
                    </div>
                </Link>
            </div >
        </div >
    )
}

export default Menu