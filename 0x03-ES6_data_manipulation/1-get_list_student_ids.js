export default function getListStudentIds(arrayObject) {
  if (!Array.isArray(arrayObject)) {
    return [];
  }
  return arrayObject.map((args) => args.id);
}
