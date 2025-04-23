import jwt from 'jsonwebtoken';


const createToken = (payload, secret) => {
  const token = jwt.sign(payload, secret, { expiresIn: '1h' });
  return token;
};


const verifyToken = (token, secret) => {
  try {
    const decoded = jwt.verify(token, secret); 
    console.log("✅ Token is valid:", decoded);
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      console.log("⏰ Token has expired.");
    } else {
      console.log("❌ Invalid token:", err.message);
    }
  }
};

const payload = { username: 'Lokeswara', role: 'admin' };
const secret = 'superSecretKey';
const token = createToken(payload, secret);

console.log('Generated JWT:', token);

verifyToken(token, secret);