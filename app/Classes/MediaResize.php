<?php

namespace Website\Classes;


use KikCMS\Classes\Frontend\Extendables\MediaResizeBase;
use Phalcon\Image\Adapter\Imagick;

class MediaResize extends MediaResizeBase
{
    /**
     * Will automatically resize an image called by twig shortcut: mediaFile(fileId)
     *
     * @param Imagick $image
     */
    public function resizeExample(Imagick $image)
    {
        $this->resize($image, 50, 50);
    }
}