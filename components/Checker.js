import {useValue} from './ValueContext';

const Checker = (index) => {
    const {currentValue} = useValue();
    const dateToday = Number(new Date().getDate());
    const waterDay = Number(JSON.stringify(currentValue['plantWatering'][index]['date']));
    console.log(dateToday, waterDay);
    if (dateToday == waterDay) {
        return true;
    }
    else {
        return false;
    }
}

export default Checker