import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const images = [
  { preview: 'https://picsum.photos/id/10/300/200', original: 'https://picsum.photos/id/10/1200/800', description: 'Lake and forest' },
  { preview: 'https://picsum.photos/id/20/300/200', original: 'https://picsum.photos/id/20/1200/800', description: 'Laptop on desk' },
  { preview: 'https://picsum.photos/id/30/300/200', original: 'https://picsum.photos/id/30/1200/800', description: 'City street' },
  { preview: 'https://picsum.photos/id/40/300/200', original: 'https://picsum.photos/id/40/1200/800', description: 'Mountain view' },
  { preview: 'https://picsum.photos/id/50/300/200', original: 'https://picsum.photos/id/50/1200/800', description: 'Snowy hill' },
  { preview: 'https://picsum.photos/id/60/300/200', original: 'https://picsum.photos/id/60/1200/800', description: 'Sea coast' },
];

const galleryMarkup = images
  .map(
    ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});