import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import trLocale from 'date-fns/locale/tr';

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
`;

const DateItem = styled.span`
  font-size: 10px;
  color: #FAFAFA;
`;

const DateTime = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate = format(currentDate, "dd MMMM yyyy", { locale: trLocale });

  return (
    <DateWrapper>
      <DateItem>{formattedDate}</DateItem>
      <DateItem>{format(currentDate, "HH:mm")}</DateItem>
    </DateWrapper>
  );
};

export default DateTime;