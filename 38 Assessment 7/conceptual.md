### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
JSON Web Token. Used for authorization.

- What is the signature portion of the JWT?  What does it do?
The Signature bundles the header, payload, secret, and algorithm in the header, and is used to verify that the information was not altered along the way.

- If a JWT is intercepted, can the attacker see what's inside the payload?
Signed tokens are protected against tampering, but not viewing.

- How can you implement authentication with a JWT?  Describe how it works at a high level.
When a user logs in with their credentials, a JWT is returned. If the user wants to access authorized information, their JWT token can be sent as authorization.

- Compare and contrast unit, integration and end-to-end tests.
Unit tests are for testing a class or algorithm.
Integration tests gocus on a small number of modules and test their interactions.
End-to-End tests are for the application as a whole, but are not good for pinpointing issues.

- What is a mock? What are some things you would mock?
A mock simulates a real, but controlled, method or object. You can mock user data for authentication tests.

- What is continuous integration?
The practice of automating the integration of code changes from multiple contributors into a single project.

- What is an environment variable and what are they used for?
Predetermined variable with a protected value that can be called within the code.

- What is TDD? What are some benefits and drawbacks?
Test Driven Development. The practice of writing tests and the writing code against those tests. This is a very slow process and if requirements change, the tests change, and then the code is broken.

- What is the value of using JSONSchema for validation?
It generates clear documentation. It accurately describes the structure of data in a way that developers can use for automating validation.

- What are some ways to decide which code to test?
You can use a coverage tracker to see what isn't tested. Always start with testing basic functionality, algorithms, authentication, and validation.

- What does `RETURNING` do in SQL? When would you use it?
Retrieves values of columns that were modified by `Insert`, `Delete`, or `Update`. Without Returning, you would need to run a select statement.

- What are some differences between Web Sockets and HTTP?
WebSockets send updates are sent immediately when available. They keep a single, persistent connection open and eliminate latency issues.

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
I prefer Python/Flask. I prefer that Python/Flask requires code to be more structed.