import React from 'react';
import Time from 'react-time'; // https://github.com/andreypopp/react-time

export default {
  formattedDate: date => {
    const now = new Date().getTime();
    const newDate = new Date(date).getTime();
    const diff = now - newDate;

    const seconds = diff / 1000;
    const mins = seconds / 60;
    const hours = mins / 60;

    if (hours < 24) {
      return <Time value={date} format="MMM DD, YYYY" relative />;
    }

    return <Time value={date} format="MMM DD, YYYY" />;
  },

  relativeTime: date => {
    return <Time value={date} titleFormat="YYYY/MM/DD HH:mm" relative />;
  }
};
