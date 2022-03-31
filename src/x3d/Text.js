import React, { useRef, useState } from 'react'
import 'x3dom/x3dom.js';
import 'x3dom/x3dom.css';

export default function Text(props) {
  return (
    <div>
            <x3d width='500px' height='300px' >
                <scene>
                    <shape>
                        <appearance>
                            <material id='color' diffusecolor='1 0 0'></material>
                        </appearance>
                        <box></box>
                    </shape>
                </scene>
            </x3d>
    </div>
  )
}
