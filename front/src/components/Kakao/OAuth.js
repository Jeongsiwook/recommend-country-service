// OAuth.js 라는 컴포넌트를 따로 생성하여 관리하였음
const CLIENT_ID = '4db0ceddd72b85015bb53fc2b6c81918';
const REDIRECT_URI = 'http://localhost:3000/users/kakao/callback';

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;