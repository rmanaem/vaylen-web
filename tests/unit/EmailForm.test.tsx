import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import EmailForm from '@/components/EmailForm';

/**
 * Unit Test: EmailForm Component
 * 
 * High-signal tests for EmailForm behavior.
 * Tests user interactions, validation, and state management.
 */

describe('EmailForm Component', () => {
    it('should render email input and submit button', () => {
        // ARRANGE & ACT
        render(<EmailForm id="test-form" />);

        // ASSERT - Core UI elements present
        const emailInput = screen.getByPlaceholderText(/enter email/i);
        const submitButton = screen.getByRole('button', { name: /join/i });

        expect(emailInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();
    });

    it('should accept valid email input', async () => {
        // ARRANGE
        const user = userEvent.setup();
        render(<EmailForm id="test-form" />);

        // ACT
        const emailInput = screen.getByPlaceholderText(/enter email/i);
        await user.type(emailInput, 'test@example.com');

        // ASSERT
        expect(emailInput).toHaveValue('test@example.com');
    });

    it('should validate email format with HTML5 validation', () => {
        // ARRANGE & ACT
        render(<EmailForm id="test-form" />);

        // ASSERT - Input has correct type for browser validation
        const emailInput = screen.getByPlaceholderText(/enter email/i);
        expect(emailInput).toHaveAttribute('type', 'email');
    });

    it('should have accessible form elements', () => {
        // ARRANGE & ACT
        render(<EmailForm id="test-form" />);

        // ASSERT - Accessibility
        const emailInput = screen.getByPlaceholderText(/enter email/i);
        const submitButton = screen.getByRole('button', { name: /join/i });

        // Input should have email type
        expect(emailInput).toHaveAttribute('type', 'email');

        // Button should have accessible text
        expect(submitButton).toHaveTextContent(/join/i);
    });

    it('should have unique form ID for multiple instances', () => {
        // ARRANGE & ACT
        const { container: container1 } = render(<EmailForm id="form-1" />);
        const { container: container2 } = render(<EmailForm id="form-2" />);

        // ASSERT - Forms have unique IDs
        const form1 = container1.querySelector('#form-1');
        const form2 = container2.querySelector('#form-2');

        expect(form1).toBeInTheDocument();
        expect(form2).toBeInTheDocument();
    });

    it('should enable submit button when form is valid', () => {
        // ARRANGE & ACT
        render(<EmailForm id="test-form" />);

        // ASSERT - Button is enabled (not disabled by default)
        const submitButton = screen.getByRole('button', { name: /join/i });
        expect(submitButton).toBeEnabled();
    });
});
