import React from 'react'

const Card = () => {
  return (
    <div>
      <div style={{ border: '2px solid red', height: '300px', width: '400px' }}>
        <h1>pizza</h1>
        <p>
        <img src="https://imgs.search.brave.com/K_vE8NJuYHzllhNdeER9Md0vqTyjGNn7OYKgR0dwoUw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzAv/MTgyLzg4OS9zbWFs/bC9mcmVzaGx5LWJh/a2VkLXBpenphLXNs/aWNlLWJlaW5nLWxp/ZnRlZC13aXRoLXN0/cmV0Y2h5LWNoZWVz/ZS1mcmVlLXBuZy5w/bmc" alt="car" height={"100px"} width={"100px"}></img>
        </p>
        <h2>available</h2>
        <h2>PRICE: 500</h2>
      </div>
    </div>
  )
}

export default Card
