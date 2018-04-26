<?php

namespace Website\Classes;


use KikCMS\Classes\Frontend\Extendables\WebsiteSettingsBase;
use Phalcon\Mvc\Router\Group;

/**
 * @inheritdoc
 */
class WebsiteSettings extends WebsiteSettingsBase
{
    /**
     * @inheritdoc
     */
    public function addFrontendRoutes(Group $frontend)
    {
    }

    /**
     * @inheritdoc
     */
    public function addBackendRoutes(Group $backend)
    {
    }

    /**
     * @inheritdoc
     */
    public function getMenuGroups(array $menuGroups): array
    {
        return $menuGroups;
    }

    /**
     * @inheritdoc
     */
    public function getServices(): array
    {
        return [];
    }
}