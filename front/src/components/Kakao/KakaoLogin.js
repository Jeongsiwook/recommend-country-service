import React, { useEffect, useContext } from 'react';
import queryString from 'query-string';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CLIENT_ID, REDIRECT_URI } from './OAuth';
import { DispatchContext } from '../../App';

const Login = (props) => {
  const kauthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const query = queryString.parse(window.location.search);
  const dispatch = useContext(DispatchContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.code) {
      getKakaoTokenHandler(query.code.toString());
    }
  }, []);
  const getKakaoTokenHandler = async (code) => {
    const data = {
      grant_type: 'authorization_code',
      client_id: CLIENT_ID,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: 'vxS2rzKh5KlmNaH1J3aZeumA93mTTmUI',
    };
    const queryString = Object.keys(data)
      .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
      .join('&');
    axios
      .post('https://kauth.kakao.com/oauth/token', queryString, {
        headers: {
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      })
      .then((res) => {
        sendKakaoTokenToServer(res.data.access_token);
      });
  };

  //일반 로그인
  const sendKakaoTokenToServer = (token) => {
    axios
      .post('http://localhost:5001/users/auth/kakao', { accessToken: token })
      .then((res) => {
        if (res.status === 201 || res.status === 200) {
          const { data } = res; // 받아온 데이터({token: {}, userInfo: {}})
          window.sessionStorage.setItem('userToken', JSON.stringify(token));
          window.alert(`${data.userInfo.name}님 환영합니당~!^^*`);
          dispatch({
            type: 'LOGIN_SUCCESS',
            payload: data.userInfo,
          });
          navigate('/cityInfo');
        } else {
          window.alert('로그인에 실패하였습니다.');
        }
      });
  };

  return (
    <>
      <a href={kauthUrl}>
        <img
          src="/imgs/kakao_login_medium_wide.png"
          alt="kakao"
          id="kakao-login-btn"
        />
      </a>
    </>
  );
};

export default Login;
