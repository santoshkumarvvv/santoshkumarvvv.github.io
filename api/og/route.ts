import React from 'react';
import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';
export const config = {
  runtime: 'edge',
};

export async function GET(): Promise<Response> {
  return new ImageResponse(
    React.createElement(
      'div',
      {
        style: {
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '80px',
          backgroundColor: '#09090b',
          color: '#f4f4f5',
          fontFamily: 'sans-serif',
          border: '2px solid #27272a',
          position: 'relative',
        },
      },
      React.createElement(
        'div',
        {
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '8px 18px',
            borderRadius: '9999px',
            backgroundColor: '#18181b',
            border: '1px solid rgba(239, 159, 39, 0.45)',
            color: '#EF9F27',
            fontSize: '20px',
            fontWeight: 600,
            marginBottom: '32px',
          },
        },
        '● @santoshkumarvvv · Systems & Search Architecture'
      ),
      React.createElement(
        'div',
        {
          style: {
            fontSize: '84px',
            fontWeight: 800,
            color: '#f4f4f5',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
            marginBottom: '16px',
          },
        },
        'Santosh Kumar'
      ),
      React.createElement(
        'div',
        {
          style: {
            fontSize: '46px',
            fontWeight: 700,
            color: '#EF9F27',
            letterSpacing: '-0.02em',
            marginBottom: '28px',
          },
        },
        'Systems & Search Hub'
      ),
      React.createElement(
        'div',
        {
          style: {
            fontSize: '26px',
            fontWeight: 500,
            color: '#a1a1aa',
            letterSpacing: '-0.01em',
          },
        },
        'In-memory BM25 search engine · Native Flutter apps'
      )
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
