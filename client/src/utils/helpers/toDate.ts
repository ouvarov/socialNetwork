const toDate = (date: string) => {
    const newDate = new Date(date);
    const month = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    return `${newDate.getDate()} ${month[newDate.getMonth()]} ${newDate.getFullYear()} `;
};

export default toDate;
