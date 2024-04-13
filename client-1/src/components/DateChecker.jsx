import React from 'react';

const DateChecker = ({ givenDate }) => {
  const isDateTwoDaysPrior = () => {
    const given = new Date(givenDate); // Given date
    const currentDate = new Date(); // Current date

    // Set currentDate to two days prior
    currentDate.setDate(currentDate.getDate() - 2);

    // Compare the given date with the modified current date
    return given < currentDate;
  };

  return (
    <div>
      <p>
        {isDateTwoDaysPrior() ? 'The given date is two days prior!' : 'The given date is not two days prior.'}
      </p>
    </div>
  );
};

export default DateChecker;
