export default function getImage(pet) {
  let uri = pet && pet.media.photos && pet.media.photos.photo ? pet.media.photos.photo[3] : null;
  return uri ? { uri } : null;
}
