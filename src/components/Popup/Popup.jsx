import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ContactForm from '../ContactForm/ContactForm';
import "./Popup.css"

export default function PopupGfg() {
	return (
		<div>
			{/* <h4>Popup - GeeksforGeeks</h4> */}
			<Popup trigger=
				{<button> Click to open modal </button>}
				modal nested>
				{
					close => (
						<div className='modal'>
                            <ContactForm/>
							<div className='content'>
								Welcome to GFG!!!
							</div>
							<div>
								<button onClick=
									{() => close()}>
										Close modal
								</button>
							</div>
						</div>
					)
				}
			</Popup>
		</div>
	)
};
