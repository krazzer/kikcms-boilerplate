<?php declare(strict_types=1);

namespace Website\Objects\PageImage;

use KikCMS\Classes\DataTable\DataTable;

class PageImages extends DataTable
{
    /** @inheritdoc */
    protected $sortable = true;

    /**
     * @inheritdoc
     */
    public function getFormClass(): string
    {
        return PageImageForm::class;
    }

    /**
     * @inheritdoc
     */
    public function getLabels(): array
    {
        return ['image', 'images'];
    }

    /**
     * @inheritdoc
     */
    public function getModel(): string
    {
        return PageImage::class;
    }

    /**
     * @inheritdoc
     */
    public function getTableFieldMap(): array
    {
        return [
            PageImage::FIELD_ID       => 'Id',
            PageImage::FIELD_NAME     => 'Name',
            PageImage::FIELD_IMAGE_ID => 'Image',
        ];
    }

    /**
     * @inheritdoc
     */
    public function initialize()
    {
        $this->setFieldFormatting(PageImage::FIELD_IMAGE_ID, [$this, 'formatFinderImage']);
    }
}
