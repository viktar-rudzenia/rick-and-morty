import { render, screen, fireEvent } from '@testing-library/react';

import CharacterItem from '@/components/characters/CharacterItem';
import { mockCharacter } from '@/utils/mocks/characters/mockData';

describe('CharacterItem Component', () => {
  const mockSetSelectedCharacter = jest.fn();

  // Reset the mock function after each test
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the character name', () => {
    render(
      <CharacterItem character={mockCharacter} setSelectedCharacter={mockSetSelectedCharacter} />
    );

    const characterName = screen.getByText(mockCharacter.name);
    expect(characterName).toBeInTheDocument();
  });

  it('should render the character image with correct src and alt attributes', () => {
    render(
      <CharacterItem character={mockCharacter} setSelectedCharacter={mockSetSelectedCharacter} />
    );

    const characterImage = screen.getByAltText(mockCharacter.name);
    expect(characterImage).toBeInTheDocument();
    expect(characterImage).toHaveAttribute('src', mockCharacter.image);
  });

  it('should call setSelectedCharacter with the correct character when the card is clicked', () => {
    render(
      <CharacterItem character={mockCharacter} setSelectedCharacter={mockSetSelectedCharacter} />
    );

    const cardElement = screen.getByText(mockCharacter.name);
    fireEvent.click(cardElement);

    expect(mockSetSelectedCharacter).toHaveBeenCalledTimes(1);
    expect(mockSetSelectedCharacter).toHaveBeenCalledWith(mockCharacter);
  });

  it('should apply the hoverable class to the card', () => {
    render(
      <CharacterItem character={mockCharacter} setSelectedCharacter={mockSetSelectedCharacter} />
    );

    const cardElement = screen
      .getByRole('img', { name: mockCharacter.name })
      .closest('.ant-card-hoverable');
    expect(cardElement).toBeInTheDocument();
  });

  it('should not have any console errors during rendering', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <CharacterItem character={mockCharacter} setSelectedCharacter={mockSetSelectedCharacter} />
    );

    expect(consoleErrorSpy).not.toHaveBeenCalled();

    consoleErrorSpy.mockRestore();
  });
});
