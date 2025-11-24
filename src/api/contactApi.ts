export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  data?: unknown;
}

// Use a relative base URL during development so Vite dev server proxy can forward requests
const API_BASE_URL = import.meta.env.DEV
  ? ''
  : import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

export const sendMessage = async (
  formData: ContactFormData
): Promise<ContactResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      // Attempt to read error body for better diagnostics
      let errBody: string | object = '';
      try {
        const text = await response.text();
        // try parse json, otherwise keep text
        try {
          errBody = JSON.parse(text);
        } catch (_e) {
          errBody = text;
        }
      } catch (readErr) {
        errBody = `Unable to read response body: ${String(readErr)}`;
      }
      console.error('Backend returned error', { status: response.status, body: errBody });
      throw new Error(`HTTP error ${response.status}: ${typeof errBody === 'string' ? errBody : JSON.stringify(errBody)}`);
    }

    const data: ContactResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw new Error(
      error instanceof Error ? error.message : 'Failed to send message'
    );
  }
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateFormData = (data: ContactFormData): string[] => {
  const errors: string[] = [];

  if (!data.name.trim()) {
    errors.push('Name is required');
  }
  if (!data.email.trim()) {
    errors.push('Email is required');
  } else if (!validateEmail(data.email)) {
    errors.push('Please enter a valid email address');
  }
  if (!data.message.trim()) {
    errors.push('Message is required');
  } else if (data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  return errors;
};
