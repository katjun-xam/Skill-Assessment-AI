import React, { ReactElement, Children } from 'react';

interface IProps {
  condition?: boolean;
  children: JSX.Element | JSX.Element[];
}

export const ElseIf: React.FunctionComponent<IProps> = ({ children }): JSX.Element => {
  return <>{children}</>;
};

export const Else: React.FunctionComponent<IProps> = ({ children }): JSX.Element => {
  return <>{children}</>;
};

export const If: React.FunctionComponent<IProps> = ({ children, condition }): JSX.Element => {
  const block: JSX.Element[] = [];
  let ifConditionMet = false;
  let elseIfConditionMet = false;

  Children.forEach(children, (child: ReactElement) => {
    if (condition && child.type !== ElseIf && child.type !== Else) {
      ifConditionMet = true;
      block.push(child);
    }

    if (child.type === ElseIf && child.props.condition) {
      elseIfConditionMet = true;
      block.push(child);
    }

    if (child.type === Else && !elseIfConditionMet && !ifConditionMet) {
      block.push(child);
    }
  });

  return <>{block.map((child) => child)}</>;
};
