import"./assets/styles-864b87dc.js";import{f as m,i as h}from"./assets/vendor-77e16229.js";const y=new Date,f=document.querySelector("#datetime-picker");let n=null;const a=document.querySelector(".js-btn"),S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<y?(h.error({message:"Please choose a date in the future"}),a.disabled=!0):(n=t[0],console.log(n),a.disabled=!1)}};m(f,S);const e={days:document.querySelector(".js-days"),hours:document.querySelector(".js-hours"),minutes:document.querySelector(".js-minutes"),seconds:document.querySelector(".js-seconds")};function p(t){const s=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),i=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:d,minutes:i,seconds:l}}setInterval(()=>{if(n){const o=n-new Date;if(o<=0){e.days.textContent="00",e.hours.textContent="00",e.minutes.textContent="00",e.seconds.textContent="00";return}const{days:r,hours:u,minutes:c,seconds:s}=p(o);e.days.textContent=String(r).padStart(2,"0"),e.hours.textContent=String(u).padStart(2,"0"),e.minutes.textContent=String(c).padStart(2,"0"),e.seconds.textContent=String(s).padStart(2,"0")}},1e3);
//# sourceMappingURL=commonHelpers.js.map