BUG #1:
Users can't update their own information.

BUG #2:
Non-admins can set their own admin status.
Bug #1 was preventing users from updating their own information which allowed the admin test to pass.

BUG #3:
getAll() method on User Class had unnecessary parameters - (username, password).

BUG #4:
Get route for all users returns email and phone number.
It should only return username, first_name, last_name.

BUG #5:
authUser function in middleware only decodes the token.
It should verify to ensure the token hasn't been tampered with.