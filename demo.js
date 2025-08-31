// Demo entry point for testing
import { CosmicUI } from './dist/index.esm.js';

/**
 * Creates a demo UI to showcase cosmic components
 */
function createCosmicDemo() {
	// Create demo container
	const demoContainer = document.createElement('div');
	demoContainer.style.position = 'fixed';
	demoContainer.style.top = '20px';
	demoContainer.style.left = '20px';
	demoContainer.style.zIndex = '1000';
	demoContainer.style.display = 'flex';
	demoContainer.style.flexDirection = 'column';
	demoContainer.style.gap = '10px';
	demoContainer.style.maxWidth = '200px';

	// Demo buttons
	const btnCard = CosmicUI.createButton({
		text: 'Show Card Demo',
		variant: 'secondary',
		onClick: () => showCardDemo(),
	});

	const btnDemo = CosmicUI.createButton({
		text: 'Show Modal Demo',
		variant: 'primary',
		onClick: () => showModalDemo(),
	});

	const btnError = CosmicUI.createButton({
		text: 'Show Error Demo',
		variant: 'danger',
		onClick: () => showErrorDemo(),
	});

	demoContainer.appendChild(btnCard);
	demoContainer.appendChild(btnDemo);
	demoContainer.appendChild(btnError);

	document.body.appendChild(demoContainer);
}

function showCardDemo() {
	const card = CosmicUI.createCard({
		title: 'Demo Card',
		content: '<p>This is a cosmic-themed card!</p>',
	});

	card.style.position = 'fixed';
	card.style.top = '50%';
	card.style.left = '50%';
	card.style.transform = 'translate(-50%, -50%)';
	card.style.zIndex = '9999';

	document.body.appendChild(card);

	setTimeout(() => {
		if (card.parentNode) {
			card.parentNode.removeChild(card);
		}
	}, 3000);
}

function showModalDemo() {
	const modal = CosmicUI.createModal({
		title: 'Demo Modal',
		content: '<p>This is a cosmic-themed modal!</p>',
		buttons: [
			{ text: 'Close', variant: 'secondary' },
		],
	});

	CosmicUI.showModal(modal);
}

function showErrorDemo() {
	CosmicUI.showError('Demo Error', 'This is a demo error message!');
}

// Run demo
createCosmicDemo();