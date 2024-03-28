"use client";
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import Filter from '@/app/components/Filter';
import styled from 'styled-components';
import EmptyIcon from '@/app/ui/assets/empty.svg';
import Image from 'next/image';
import Logo2 from '@/app/ui/assets/logo2.svg';
import Iskbet from '@/app/ui/assets/iskbet.svg';
import Live from '@/app/ui/assets/live.svg';

const FilterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PageContentWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  gap: 4px;

  .left {
    width: 100%;
  }
`;

const FilterResult = styled.div`
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-color: #fff;

  div {
    color: rgb(153, 153, 153);
    font-size: 20px;
  }
`;

const DateTitle = styled.span` 
  margin: 0;
  font-size: 14px;
  height: 30px;
  background-color: #353F45;
  font-weight: bold;
  color: #fff;
  padding: 6px 0 6px 15px;
  display: block;
`;

const ContentWrapper = styled.div`
  display: flex;
  background-color: #fff;
  height: 34px;
  display: flex;
  background-color: #fff;
  height: 34px;
  position: relative;
  align-items: center;
  padding-left: 10px;

  &:nth-child(odd) {
    background-color: #E8EDEF;
  }

  .event {
    font-size: 11px;
    font-weight: bold;
    color: #fff;
    border-radius: 4px;
    width: 16px;
    height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;

    &.red {
      background-color: #FF4242;
    }

    &.green {
      background-color: #A9D023;
    }

    &.blue {
      background-color: #1C6A9F;
    }
  }

  .clock {
    font-size: 12px;
    font-weight: bold;
    color: #212121;
    border-right: 1px solid rgb(219, 227, 231);
    border-left: 1px solid rgb(219, 227, 231);
    height: 34px;
    display: flex;
    align-items: center;
    padding: 0 2px;
    min-width: 42px;
  }

  .title {
    font-size: 12px;
    color: #262626;
    font-weight: bold;
    margin-left: 8px;
    width: 100%;
  }
`;

const CreateCouponButton = styled.div`
  width: 100%;
  max-width: 240px;
  margin-top: 15px;

  .header {
    height: 63px;
    background-color: #3A4449;
    padding: 12px;
    display: flex;
    justify-content: space-between;

    &-left {
      color: #fff;

      div {
        font-size: 18px;
        font-weight: 600;
        line-height: 19px;
        margin-bottom: 4px;
      }

      span {
        font-size: 14px;
        font-weight: 500;
      }
    }

    &-right {
      width: 32px;
      height: 32px;
      background-color: #898f91 !important;
      border-radius: 50%;
      background: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='10' fill='none' xmlns:v='https://vecta.io/nano'%3E%3Cpath d='M8.933.667l6.533 6.65c.467.467.467 1.167 0 1.633s-1.167.467-1.633 0L8 3.233 2.167 8.95C1.7 9.417 1 9.417.533 8.95.3 8.717.183 8.483.183 8.133s.117-.583.35-.817L7.067.667C7.65.2 8.35.2 8.933.667c-.117 0-.117 0 0 0z' fill='%23fff'/%3E%3C/svg%3E") no-repeat;
      background-position: center;
    }
  }

  .content {
    height: 242px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 20px;
    gap: 20px;
    color: #8BA1AD;

    .title {
      font-size: 16px;
      font-weight: bold;
    }

    .desc {
      font-size: 12px;
      font-weight: 400;
    }
  }
`;

const RatioWrapper = styled.section`
  display: flex;
  height: 34px;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;

  div {
    font-size: 12px;
    font-weight: bold;
    color: #34373B;
    height: 100%;
    display: flex;
    align-items: center;
    min-width: 38px;
    justify-content: center;
    border-left: 1px solid rgb(219,227,231);
    border-right: 1px solid rgb(219,227,231);
  }
`;

const BetLiveContent = styled.div`
  display: flex;
  gap: 5px;
  margin-left: auto;
  margin-right: 6px;

  div {
    width: 16px;
  }
`;

const ProgramPage = () => {
  const selectedSportProgram = useSelector(state => state.sportProgram.selectedSportProgram);
  const [filteredData, setFilteredData] = useState(selectedSportProgram);
  const [initialDataLoaded, setInitialDataLoaded] = useState(false);
  const [isKingFilterApplied, setIsKingFilterApplied] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, [filteredData]);

  useEffect(() => {
    if (selectedSportProgram) {
      setFilteredData(selectedSportProgram);
      setInitialDataLoaded(true);
    }
  }, [selectedSportProgram]);

  const handleFilterChange = (filterText) => {
    if (initialDataLoaded) {
      const filtered = selectedSportProgram.filter(item =>
        item.en.toLowerCase().includes(filterText.toLowerCase())
      );
      setFilteredData(filtered);
    }
  };

  const handleKingClick = () => {
    if (!isKingFilterApplied) {
      const filtered = selectedSportProgram.filter(item =>
        item.live === true
      );
      setFilteredData(filtered);
      setIsKingFilterApplied(true);
    } else {
      setFilteredData(selectedSportProgram);
      setIsKingFilterApplied(false);
    }
  };

  const resetFilter = () => {
    setFilteredData(selectedSportProgram);
    setIsKingFilterApplied(false);
  };

  const handleFilterMatches = () => {
    const filtered = selectedSportProgram.filter(match => match.mb === 1);
    setFilteredData(filtered);
  };

  const groupedAndSortedData = {};
  filteredData?.forEach(item => {
    const eventDate = new Date(item.e);
    const eventDateString = eventDate.toLocaleDateString('tr-TR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    if (!groupedAndSortedData[eventDateString]) {
      groupedAndSortedData[eventDateString] = [];
    }
    groupedAndSortedData[eventDateString].push(item);
  });

  const sortedDates = Object.keys(groupedAndSortedData).sort((a, b) => new Date(a) - new Date(b));

  function getClassName(mb) {
    switch (mb) {
      case 1:
        return 'red';
      case 2:
        return 'green';
      case 3:
        return 'blue';
      default:
        return '';
    }
  }

  return (
    <PageContentWrapper>
      <div className='left'>
        <Filter
          onFilterChange={handleFilterChange}
          onKingClick={handleKingClick}
          onDeleteClick={resetFilter}
          onFilterMatches={handleFilterMatches} />
          <FilterWrapper>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <>
                {filteredData && filteredData.length > 0 ? (
                  <>
                    {sortedDates.map(date => (
                      <div key={date}>
                        <DateTitle>{date}</DateTitle>
                        {groupedAndSortedData[date].map((event, index) => (
                          <ContentWrapper key={index}>
                            <div className={`event ${getClassName(event.mb)}`}>{event.mb}</div>
                            <div className='clock'>{event.edh}</div>
                            <div className='title'>{event.en}</div>
                            <BetLiveContent>
                              <div>{event.iskbet ? <Image src={Iskbet} alt="iskbet" /> : null}</div>
                              <div>{event.live ? <Image src={Live} alt="live" /> : null}</div>
                            </BetLiveContent>
                            <RatioWrapper>
                              {event.m && event.m.map(match => (
                                match.o && match.o.map(option => {
                                    if (match.muk === "1_1" || match.muk === "1_2" || match.muk === "1_9") {
                                        return <div key={option.ou}>{option.odd}</div>;
                                    } else {
                                        return null;
                                    }
                                })
                              ))}
                            </RatioWrapper>
                          </ContentWrapper>
                        ))}
                      </div>
                    ))}
                  </>
                ) : (
                  // Eğer veri yoksa veya filtrelenmiş veri bulunamadıysa, kullanıcıya bir mesaj göster
                  <FilterResult>
                    <Image src={EmptyIcon} alt="empty" />
                    <div>Şu anda oynanabilir bahis bulunmamaktadır.</div>
                  </FilterResult>
                )}
              </>
            )}
          </FilterWrapper>
      </div>
      <CreateCouponButton>
        <div className='header'>
          <div className='header-left'>
            <div>Kuponum</div>
            <span>T. Oran: 0</span>
          </div>
          <div className='header-right'>
          </div>
        </div>
        <div className='content'>
          <Image src={Logo2} alt='logo' />
          <div className='title'>Kuponunuzda maç bulunmamaktadır.</div>
          <div className='desc'>Hemen bültene göz atarak maç ekleyebilirsin.</div>
        </div>
      </CreateCouponButton>
    </PageContentWrapper>
  );
};

export default ProgramPage;
