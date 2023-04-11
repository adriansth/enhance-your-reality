// dayjs 
import dayjs from 'dayjs';

// clean text from blogger and limit it to 50 characters
export const cleanTextShort = (str) => {
   let plainText = str.replace(/<[^>]+>/g, '');
   plainText = plainText.replace('&nbsp;', '');
   plainText = plainText.slice(0, 250) + '...';
   return plainText;
}

// clean whole text from blogger
export const cleanText = (str) => {
   let plainText = str.replace(/style=".*?"/g, ''); // remove style attribute
   plainText = plainText.replace(/id=".*?"/g, ''); // remove id attribute
   plainText = plainText.replace(/class=".*?"/g, ''); // remove class attribute
   plainText = plainText.replace(/width=".*?"/g, ''); // remove width attribute
   plainText = plainText.replace(/dir=".*?"/g, '') // remove dir attribute
   plainText = plainText.replace(/height=".*?"/g, '') // remove dir attribute
   plainText = plainText.replace(/<span[^>]+.*?>/g, ''); // remove spans
   plainText = plainText.replace(/<\/span>/g, '');
   plainText = plainText.replace(/<div[^>]+.*?>/g, ''); // remove divs
   plainText = plainText.replace(/<div>/g, '');
   plainText = plainText.replace(/<\/div>/g, '');
   plainText = plainText.replace(/<img[^>]+.*?>/g, ''); // remove imgs
   plainText = plainText.replace(/&nbsp;/g, '') // replace &nbsp 
   return plainText;
}

 // get url from image embedded in content 
 export const getImageSrc = (str) => {
   const src = str.slice(str.indexOf("src")).split('"')[1];
   return src;
}

 // format date
 export const formatDate = (str) => {
   const month = dayjs(str).format('MMM');
   const day = dayjs(str).format('DD');
   const year = dayjs(str).format('YYYY');
   return `${month} ${day}, ${year}`;
}