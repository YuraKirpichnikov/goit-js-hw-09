import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{S as p}from"./assets/vendor-CgTBfC_f.js";const o=document.querySelector(".gallery"),e=[{preview:"https://picsum.photos/id/10/300/200",original:"https://picsum.photos/id/10/1200/800",description:"Lake and forest"},{preview:"https://picsum.photos/id/20/300/200",original:"https://picsum.photos/id/20/1200/800",description:"Laptop on desk"},{preview:"https://picsum.photos/id/30/300/200",original:"https://picsum.photos/id/30/1200/800",description:"City street"},{preview:"https://picsum.photos/id/40/300/200",original:"https://picsum.photos/id/40/1200/800",description:"Mountain view"},{preview:"https://picsum.photos/id/50/300/200",original:"https://picsum.photos/id/50/1200/800",description:"Snowy hill"},{preview:"https://picsum.photos/id/60/300/200",original:"https://picsum.photos/id/60/1200/800",description:"Sea coast"}],a=e.map(({preview:i,original:t,description:s})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${t}">
          <img
            class="gallery-image"
            src="${i}"
            alt="${s}"
          />
        </a>
      </li>
    `).join("");o.insertAdjacentHTML("beforeend",a);new p(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
