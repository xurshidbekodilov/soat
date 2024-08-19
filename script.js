document.addEventListener('DOMContentLoaded', () => {
    const timezoneSelect1 = document.getElementById('timezone-select1');
    const timezoneSelect2 = document.getElementById('timezone-select2');
    const clock1 = document.getElementById('clock1').querySelector('.clock-time');
    const clock2 = document.getElementById('clock2').querySelector('.clock-time');
    const timezones = [
        'Asia/Tashkent', 'Asia/Almaty', 'Asia/Bangkok', 'Asia/Shanghai', 'Asia/Singapore',
        'Asia/Seoul', 'Asia/Tokyo', 'Asia/Kolkata', 'Asia/Manila', 'Asia/Jakarta',
        'Asia/Kabul', 'Asia/Qatar', 'Asia/Dubai','Asia/Karachi','Asia/Novosibirsk', 'Asia/Vladivostok','Europe/London', 'Europe/Paris', 'America/New_York', 'Europe/Berlin', 
        'America/Toronto', 'Australia/Canberra', 'Europe/Moscow'
    ];
    function populateSelect() {
        timezones.forEach(tz => {
            const option1 = document.createElement('option');
            option1.value = tz;
            option1.textContent = tz.replace(/^(Asia|Europe|America|Australia)\//, '');
            timezoneSelect1.appendChild(option1);

            const option2 = document.createElement('option');
            option2.value = tz;
            option2.textContent = tz.replace(/^(Asia|Europe|America|Australia)\//, '');
            timezoneSelect2.appendChild(option2);
        });
    }
    function updateClocks() {
        const timezone1 = timezoneSelect1.value;
        const timezone2 = timezoneSelect2.value;

        const options = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };

        const formatter1 = new Intl.DateTimeFormat('en-US', { ...options, timeZone: timezone1 });
        const formatter2 = new Intl.DateTimeFormat('en-US', { ...options, timeZone: timezone2 });

        const time1 = formatter1.format(new Date());
        const time2 = formatter2.format(new Date());

        clock1.textContent = time1;
        clock2.textContent = time2;
    }
    timezoneSelect1.addEventListener('change', updateClocks);
    timezoneSelect2.addEventListener('change', updateClocks);
    populateSelect();
    updateClocks();
    setInterval(updateClocks, 1000);
});
