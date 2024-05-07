import React, { useEffect, useState } from 'react';
import TopMenu from '../topmenu/topmenu';
import './CalendarPage.css';

const months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
function CalendarPage() {
    const [date, setDate] = useState(new Date());
    const [currYear, setCurrYear] = useState(date.getFullYear());
    const [currMonth, setCurrMonth] = useState(date.getMonth());
    const [days, setDays] = useState([]);
    const [showSelectMenu, setShowSelectMenu] = useState(false);
    const [selectedDate, setSelectedDate] = useState({ month: '', day: '' });


    useEffect(() => {
        const renderCalendar = () => {
            let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
            let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();
            let lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
            let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
            
            let daysArray = [];
            for (let i = firstDayofMonth; i > 0; i--) {
                daysArray.push({ day: lastDateofLastMonth - i + 1, isActive: false });
            }

            for (let i = 1; i <= lastDateofMonth; i++) {
                daysArray.push({ day: i, isActive: false, isCurrentMonth: true });
            }

            for (let i = lastDayofMonth; i < 6; i++) {
                daysArray.push({ day: i - lastDayofMonth + 1, isActive: false });
            }

            setDays(daysArray);
        };

        renderCalendar();
    }, [currMonth, currYear]);

    const handleNavigation = (direction) => {
        let newMonth = direction === 'prev' ? currMonth - 1 : currMonth + 1;
        let newYear = currYear;
        if (newMonth < 0) {
            newYear = currYear - 1;
            newMonth = 11;
        } else if (newMonth > 11) {
            newYear = currYear + 1;
            newMonth = 0;
        }
        setCurrYear(newYear);
        setCurrMonth(newMonth);
        setDate(new Date(newYear, newMonth));
    };
    const handleDayClick = (day) => {
        if (day.isCurrentMonth) {
            // 이번 달의 날짜를 클릭했을 때 sellectmenu 창을 표시합니다.
            setShowSelectMenu(true);
            setSelectedDate({ month: months[currMonth], day: day.day });
        }
    };
    const handleCloseClick = () => {
        setShowSelectMenu(false);
    };




    return (
        <div>
        <TopMenu />
        <div className="wrapper">
            
            <header>
                <div className="nav">
                <button className="material-icons" onClick={() => handleNavigation('prev')}>&lt;</button>
                    <p className="current-date">{`${currYear}년 ${months[currMonth]}`}</p>
                    <button className="material-icons" onClick={() => handleNavigation('next')}>&gt; </button>
                </div>
            </header>
            
            <div className="calendar">
                <div className="weeks">
                    <div >일</div>
                    <div >월</div>
                    <div >화</div>
                    <div >수</div>
                    <div >목</div>
                    <div >금</div>
                    <div >토</div>
                </div>
                <div className="days">
                    {days.map((day, index) => (
                        <div key={index} href="#" onClick={() => handleDayClick(day)} className={day.isActive ? 'active' : day.isCurrentMonth
                        ? 'current-month' :  'inactive'}>
                            {day.day}   
                            <div className='menu'>
                                <div>밥</div>
                                <div>밥</div>
                                <div>밥</div>
                            </div>                         
                        </div>
                    ))}
                    
                </div>
            </div>
            {showSelectMenu && <div className='sellectmenu'>
            <button className='Close' onClick={handleCloseClick}>X</button>
            <div className='MD'>
                {selectedDate.month} {selectedDate.day}일
                
            </div>
            <div className='MenuContainer'>
                <div className='MenuText'>
                <div>밥 :</div>
                <div>메인 :</div>
                <div>반찬 :</div>
                <div>반찬 :</div>
                <div>반찬 :</div>
                </div>
                <div className='MenuSearch'>
                    <input className='InputText'type='text' placeholder='음식을 입력하세요'/>
                    <button>검색하기</button>
                    <div className='SearchData'></div>
                </div>
                
            </div>
            <div >
                    <button className='Button'>수정하기</button>
            </div>
            </div>}
        </div>
        </div>
        
        
    );
}

export default CalendarPage;