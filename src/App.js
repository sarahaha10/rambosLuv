import React, { useState, useMemo, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import confetti from './confetti.mp4';
import hearts from './hearts.mov';
import happy from './happy.png';
import imgNew from './imgNew.jpg';
import tryImg from './golden.jpg';
import i1 from './i1.jpg';
import i2 from './i2.jpg';
import i3 from './i3.jpg';
import i4 from './i4.jpg';

function App() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [error, setError] = useState('');

	const handleLogin = () => {
		if (username === 'RamboAndNav' && password === 'iLoveYou') {
			setIsLoggedIn(true);
			setError('');
		} else {
			toast.error('Theek se type krlo 🥺', {
				position: 'top-right',
				autoClose: 5000,
			});
		}
	};

	const useTypewriter = (text, speed = 20) => {
		const [index, setIndex] = useState(0);
		const displayText = useMemo(() => text.slice(0, index), [index]);
		useEffect(() => {
			if (index >= text.length) return;

			const timeoutId = setTimeout(() => {
				setIndex((i) => i + 1);
			}, speed);

			return () => {
				clearTimeout(timeoutId);
			};
		}, [index, text, speed]);

		return displayText;
	};

	const loginText = useTypewriter('Hi, my love 💗', 100);

	return (
		<div>
			<ToastContainer theme='dark' />
			{!isLoggedIn ? (
				<div className='login'>
					<video src={hearts} autoPlay muted loop className='hearts' />
					<div className='login-container'>
						<h2>{loginText}</h2>
						<div>
							<input
								type='text'
								placeholder='Username'
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								className='login-input'
							/>
						</div>
						<div>
							<input
								type='password'
								placeholder='Password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className='login-input'
							/>
						</div>
						<button onClick={handleLogin} className='login-btn'>
							Lezzgoooo
						</button>
					</div>
				</div>
			) : (
				<div className='App'>
					<div className='main-section'>
						<video src={confetti} autoPlay muted loop className='confetti' />
						<img src={happy} className='bday-image' />
					</div>
					<div className='second-section'>
						<div className='left-second'>
							<img src={imgNew} className='img1' />
						</div>
						<div className='right-second'>
							<p className='main-para'>
								Hey, my baby <br /> Happy Birthday meri jaan 🥳 <br />I love you
								so much ❤️
								<br />
								You are my everything baby. You mean the world to me. I wanna
								live with you, <br />
								spend my life with you and keep you very very very happy. <br />{' '}
								Talking to you is the happiest part of my day (isliye bolti hun
								call kar liya kro 😒) <br />
                I imagine you with me all the time <br />
								I know life isn't easy baby and things get fucked up but I am
								with you <br />
								I'll always be with you through everything
							</p>
							<br />
							{/* <br /> */}
							<p className='world-para'>It's you and me against the world 💖</p>
						</div>
					</div>
					<div className='third-section'>
						<div className='photos'>
							<img src={i1} className='square' />
							<img src={i2} className='square' />
              <img src={i3} className='rectangle' />
							<img src={i4} className='straight' />
						</div>
						<img src={tryImg} className='golden' />
					</div>
          <div className='fourth-section'>
            Can't wait to see you again to hug you, kiss you, get drunk with you and have lots of sex 😉 <br />
            I love you way more than you can imagine, my love💝
          </div>
				</div>
			)}
		</div>
	);
}

export default App;
