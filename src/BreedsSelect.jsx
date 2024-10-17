// @ts-check

/**
 * @param {{breeds: string[]}} props
 */
export const BreedsSelect = ({ breeds }) => {
  return (<>
    <select>
      {breeds.map((breed) => (
        <option key={breed} value={breed}>
          {breed}
        </option>
      ))}
    </select>
  </>)
}

export default BreedsSelect
