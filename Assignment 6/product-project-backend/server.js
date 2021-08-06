const fastify = require("fastify")({ logger: true });
const { v4: uuidv4 } = require('uuid');
fastify.register(require("fastify-cors"));

const mockProductDB = [
  {
    id: '1',
    name: "Watch",
    price: 800,
    quantity: 100,
    isLimited: false,
    locations: ['location 1', 'location 2', 'location 3']
  },
  {
    id: '2',
    name: "Shoe",
    price: 500,
    quantity: 50,
    isLimited: true
  },
  {
    id: '3',
    name: "Hat",
    price: 100,
    quantity: 500,
    isLimited: true,
    locations: ['location 1', 'location 2']
  },
  {
    id: '4',
    name: "Spectacles",
    price: 1000,
    quantity: 100,
    isLimited: false,
    locations: ['location 1', 'location 2', 'location 3']
  },
  {
    id: '5',
    name: "Laptop",
    price: 55000,
    quantity: 200,
    isLimited: false,
    locations: []
  },
  {
    id: '6',
    name: "Phone",
    price: 15000,
    quantity: 1,
    isLimited: false,
    locations: []
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
  let product = {
    id: uuidv4(),
    name: request.body.name,
    price: request.body.price,
    quantity: request.body.quantity,
    isLimited: request.body.isLimited
  };
  mockProductDB.push(product);
  reply.send({ status: "created", data: product });
});

fastify.listen(3000);
