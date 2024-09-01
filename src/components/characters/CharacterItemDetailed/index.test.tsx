import { render, screen } from '@testing-library/react';

import CharacterItemDetailed from '@/components/characters/CharacterItemDetailed';
import { mockCharacter } from '@/utils/mocks/characters/mockData';

describe('CharacterItemDetailed Component', () => {
  beforeEach(() => {
    render(<CharacterItemDetailed character={mockCharacter} />);
  });

  it('renders character name correctly', () => {
    const nameElement = screen.getByText(`Name: ${mockCharacter.name}`);
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveTextContent(mockCharacter.name);
  });

  it('renders character gender correctly', () => {
    const genderElement = screen.getByText(`Gender: ${mockCharacter.gender}`);
    expect(genderElement).toBeInTheDocument();
    expect(genderElement).toHaveTextContent(mockCharacter.gender);
  });

  it('renders character species correctly', () => {
    const speciesElement = screen.getByText(`Species: ${mockCharacter.species}`);
    expect(speciesElement).toBeInTheDocument();
    expect(speciesElement).toHaveTextContent(mockCharacter.species);
  });

  it('renders character status correctly', () => {
    const statusElement = screen.getByText(`Status: ${mockCharacter.status}`);
    expect(statusElement).toBeInTheDocument();
    expect(statusElement).toHaveTextContent(mockCharacter.status);
  });

  it('renders character image with correct attributes', () => {
    const characterImage = screen.getByAltText(mockCharacter.name);
    expect(characterImage).toBeInTheDocument();
    expect(characterImage).toHaveAttribute('src', mockCharacter.image);
    expect(characterImage).toHaveAttribute('alt', mockCharacter.name);
  });

  it('applies the correct class to the card', () => {
    const cardElement = screen.getByRole('img', { name: mockCharacter.name }).closest('.ant-card');
    expect(cardElement).toHaveClass('characterCard');
  });

  it('does not trigger any console errors during rendering', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    render(<CharacterItemDetailed character={mockCharacter} />);
    expect(consoleErrorSpy).not.toHaveBeenCalled();
    consoleErrorSpy.mockRestore();
  });

  it('handles missing or empty optional fields gracefully', () => {
    const characterWithEmptyFields = { ...mockCharacter, type: '' };
    render(<CharacterItemDetailed character={characterWithEmptyFields} />);

    const typeElement = screen.queryByText('Type:');
    expect(typeElement).not.toBeInTheDocument();
  });
});
