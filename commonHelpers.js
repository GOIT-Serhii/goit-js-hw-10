import"./assets/styles-864b87dc.js";import{f as h,i as f}from"./assets/vendor-77e16229.js";const y=new Date,d=document.querySelector("#datetime-picker");let n=null;const o=document.querySelector(".js-btn"),S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<y?(f.error({message:"Please choose a date in the future"}),o.disabled=!0):(n=t[0],console.log(n),o.disabled=!1)}};h(d,S);const e={days:document.querySelector(".js-days"),hours:document.querySelector(".js-hours"),minutes:document.querySelector(".js-minutes"),seconds:document.querySelector(".js-seconds")};function p(t){const r=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),l=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:r,hours:i,minutes:l,seconds:m}}o.addEventListener("click",C);function C(){setInterval(()=>{if(n){const s=n-new Date;if(s<=0){e.days.textContent="00",e.hours.textContent="00",e.minutes.textContent="00",e.seconds.textContent="00";return}const{days:c,hours:u,minutes:a,seconds:r}=p(s);e.days.textContent=String(c).padStart(2,"0"),e.hours.textContent=String(u).padStart(2,"0"),e.minutes.textContent=String(a).padStart(2,"0"),e.seconds.textContent=String(r).padStart(2,"0")}},1e3),o.disabled=!0,d.disabled=!0}
//# sourceMappingURL=commonHelpers.js.map