import React from 'react'

export default function Product({ addHandler1, inpatsHandler, inpats, selectedHandler }) {
  console.log('product')

  return (
    <>
      <form onSubmit={addHandler1} style={{backgroundColor: 'ButtonShadow'}}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">наименование товара </label>
          <input type="text" className="form-control" id="title" name="title" onChange={inpatsHandler} value={inpats.title ?? ''} />
          <div id="title" className="form-text"></div>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">цена</label>
          <input type="number" className="form-control" id="price" name='price' onChange={inpatsHandler} value={inpats.price ?? ''} />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="img" className="form-label">фото товара</label>
          <input type="file" class="form-control" id="img" name='img' onChange={selectedHandler} value={inpats.img ?? ''} />
        </div> */}
        <div class="mb-3">
          <label htmlFor="text" class="form-label">описание товара</label>
          <input type="text" className="form-control" id="text" name='text' onChange={inpatsHandler} value={inpats.text ?? ''} />
        </div>
        <div className="mb-3">
          <label for="location" className="form-label">в каком магазине товар</label>
          <input type="text" className="form-control" id="location" name='location' onChange={inpatsHandler} value={inpats.location ?? ''} />
        </div>
        <div class="mb-3">
          <label htmlFor="deadline" className="form-label">дата завершения акции</label>
          <input type="date" className="form-control" id="deadline" name='deadline' onChange={inpatsHandler} value={inpats.deadline ?? ''} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

    </>

  )
}
