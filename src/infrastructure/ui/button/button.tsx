import React from 'react'
import './button.css'

interface Props {
	label: string;
	onClick?: () => void;
}

export const Button = ({
	label,
	onClick,
}: Props): JSX.Element => {
	return <button
		type="button"
		className="button"
		onClick={onClick}
	>
		{label}
	</button>
}
