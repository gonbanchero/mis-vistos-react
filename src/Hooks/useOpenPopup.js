import { useState } from 'react';

export const useOpenPopup = () => {
	const [openPopup, setOpenPopup] = useState(null);

	return { openPopup, setOpenPopup };
};
