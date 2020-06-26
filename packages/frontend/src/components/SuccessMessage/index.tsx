import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

import './styles.css';

interface SuccessMessageProps {
    message: string;
    visible: boolean;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ message, visible }) => (
	<div className="success-message-content" style={{ visibility: visible ? 'visible' : 'hidden' }}>
		<FiCheckCircle className="success-icon" color="#34CB79" size={48} />
		<h1 className="success-message">{message}</h1>
	</div>
);

export default SuccessMessage;
