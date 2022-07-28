import React from 'react'


export default function Form({ add, inputsHandler, inputs }) {
  console.log('form')
  return (
    <>
      <form onSubmit={add}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
          <input type="text" className="form-control" id="exampleInputName" aria-describedby="namelHelp" name="name" onChange={inputsHandler} value={inputs.name} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" onChange={inputsHandler} value={inputs.email} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="text" className="form-control" id="exampleInputPassword1" name="password" onChange={inputsHandler} value={inputs.password} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" name="check" onChange={inputsHandler} checked={Boolean(inputs.check)} />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-secondary">Submit</button>
      </form>
    </>
  );
}





