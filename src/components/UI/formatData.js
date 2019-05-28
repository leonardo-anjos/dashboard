import moment from 'moment';

export const convertToDate = date => {
  if ( !date ) return  null;
  return date.substr(5,2) + '/' + date.substr(0, 4)
};

export const formatDateTime = date => {
  const dateMoment = moment(date);
  if (!dateMoment.isValid()) console.warn(` {$date} is a invalid date`);
  return dateMoment.format('LLL');
};

export const formatDateDiff = (a, b) => {
  const aMoment = moment(a);
  const bMoment = moment(b);
  if (!aMoment.isValid()) console.warn(` {$a} is a invalid date`);
  if (!bMoment.isValid()) console.warn(` {$b} is a invalid date`);
  return moment.duration(aMoment.diff(bMoment), 'miliseconds').humanize();
}