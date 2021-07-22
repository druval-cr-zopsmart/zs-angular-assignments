const fastify = require("fastify")({ logger: true });
const { v4: uuidv4 } = require('uuid');
fastify.register(require("fastify-cors"));

const mockProductDB = [
  {
    id: '1',
    name: "Watch",
    price: "Rs. 800",
    quantity: 100,
    productPic: 1,
  },
  {
    id: '2',
    name: "Shoe",
    price: "Rs. 500",
    quantity: 50,
    productPic: 2,
  },
  {
    id: '3',
    name: "Hat",
    price: "Rs. 100",
    quantity: 500,
    productPic: 3,
  },
  {
    id: '4',
    name: "Spectacles",
    price: "Rs. 1000",
    quantity: 100,
    productPic: 4,
  },
  {
    id: '5',
    name: "Laptop",
    price: "Rs. 55000",
    quantity: 200,
    productPic: 5,
  },
  {
    id: '6',
    name: "Phone",
  },
];

fastify.get("/product", function (request, reply) {
  const { query = "" } = request.query;
  reply.send({
    status: "successful",
    data: mockProductDB.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    ),
  });
});

fastify.get("/product/:id", function (request, reply) {
  const productId = request.params.id;
  reply.send({
    status: "successful",
    data: mockProductDB.find((product) =>
      product.id === productId
    ),
  });
});


fastify.post("/product", function (request, reply) {
  console.log(request.body);
  let product = {
    id: uuidv4(),
    name: request.body.name
  };
  mockProductDB.push(product);
  reply.send({ status: "created", data: product });
});

fastify.listen(3000);
