export const getUiDate = (date) => {
    const currentDate = Date.now();
    const parsedDate = Date.parse(date);

    const diffDays = Math.round((currentDate - parsedDate) / (1000 * 60 * 60 * 24));
    if(diffDays < 30){
        return diffDays==1 ? '1 day ago' :  diffDays + ' days ago';
    }else if(diffDays < 365){
        return Math.round(diffDays/30) === 1 ? '1 month ago' : Math.round(diffDays/30) + ' months ago'
    }
    return Math.round(diffDays/365) === 1 ? '1 year ago' :  Math.round(diffDays/365) + ' years ago';
}