import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAuth} from "../context/AuthContext";

const RedirectPage = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(5); // 設定倒數計時5秒
    const {authToken} = useAuth();

    useEffect(() => {
        const timer = countdown > 0 && setInterval(() => setCountdown(countdown - 1), 1000);

        if (countdown === 0) {
            if (!!authToken) {
                navigate('/');
            } else {
                navigate('/login');
            }
        }

        return () => clearTimeout(timer); // 清除定時器，避免記憶體洩漏
        // every countdown change execute useEffect
    }, [countdown, navigate, authToken]);

    return (
        <div style={{
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            width: '100%',
            height: '100%',
        }}>
            {!!authToken ? (
                <div>
                    <p>登入成功！</p>
                    <p>將在{countdown}秒後跳轉至首頁</p>
                </div>
            ) : (
                <div>
                    <p>登出成功！</p>
                    <p>將在{countdown}秒後跳轉至登入頁面</p>
                </div>
            )}
        </div>

    );
};

export default RedirectPage;