// components/Dropdown.tsx
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { DropdownButton, DropdownContainer, DropdownContent } from './styles';

interface Option {
  label: string;
  href: string;
}

interface DropdownProps {
  title: string;
  options: Option[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // Efecto para cerrar el dropdown al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    // Agrega el listener al montar el componente
    document.addEventListener('mousedown', handleClickOutside);
    
    // Limpia el listener al desmontar
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={handleToggle}>{title}</DropdownButton>
      
      <DropdownContent isOpen={isOpen}>
        {options.map((option, index) => (
          <Link key={index} href={option.href}>
            {option.label}
          </Link>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;
